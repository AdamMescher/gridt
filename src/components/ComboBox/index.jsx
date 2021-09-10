import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import ListBox from '../ListBox';
import Popover from '../Popover';

const ComboBox = (props) => {
  // Setup filter function and state.
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
  });

  // Setup refs and get props for child elements.
  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state,
  );

  // Call useButton to get props for the button element. Alternatively, you can
  // pass the triggerProps to a separate Button component using useButton
  // that you might already have in your component library.
  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
      }}
    >
      <label {...labelProps}>{props.label}</label>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <input
          {...inputProps}
          ref={inputRef}
          style={{
            height: 24,
            boxSizing: 'border-box',
            marginRight: 0,
            fontSize: 16,
          }}
        />
        <button
          {...buttonProps}
          ref={buttonRef}
          style={{
            height: 24,
            marginLeft: 0,
          }}
        >
          <span aria-hidden="true" style={{ padding: '0 2px' }}>
            ▼
          </span>
        </button>
        {state.isOpen && (
          <Popover
            popoverRef={popoverRef}
            isOpen={state.isOpen}
            onClose={state.close}
          >
            <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
          </Popover>
        )}
      </div>
    </div>
  );
};

export default ComboBox;
