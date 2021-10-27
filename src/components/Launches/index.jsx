const Launches = () => {
  const { error, data, loading } = useQuery({
    fetchPolicy: 'cache-and-network',
  });
  if (!data) {
    if (loading) {
      return <h2>Loading initial data...</h2>;
    }
    if (error) {
      return <h2>Error Loading data :</h2>;
    }
    return <h2>Unknown error: </h2>;
  }

  return (
    <div>
      {loading ? <h2>Loading fresh data...</h2> : null}
      <div>yes</div>
    </div>
  );
};
