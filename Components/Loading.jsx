import React from "react";

const Loading = ({ className }) => <div className={`loader ${className}`}>
  <img src="/images/loading.svg" alt="loader" style={{ height: 60 }} className={`loader`} />
</div>;
export default Loading;
Loading.defaultProps = {
  className: ''
}
