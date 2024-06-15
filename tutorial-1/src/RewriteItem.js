const RewriteItem = ({ handleRewrite }) => {
  return (
    <div className="rewriteButton">
      <button onClick={() => handleRewrite(1)}>Rewrite Album</button>
    </div>
  )
}

export default RewriteItem;
