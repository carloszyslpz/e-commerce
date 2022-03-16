const FormMessage = ({ purchaseId }) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">¡Gracias por tu compra! </h4>
        <p>Te llegará de 1 a 2 días hábiles.</p>
        <br />
        <p className="mb-0">No pierdas tu número de ID: {purchaseId}</p>
      </div>
    </div>
  );
};

export default FormMessage;
