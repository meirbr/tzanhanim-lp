import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["להכיר", "את", "הצנחנים", "מבפנים"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div className="h1 align-items-center">{result}</div>;
};


export default Example