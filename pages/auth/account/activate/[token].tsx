import jwt from "jsonwebtoken";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../app/hooks";
import { register } from "../../../../features/auth/authThunk";
import AccountActivation from "../../../../components/AccountActivation";

const Activate = () => {
  const [values, setValues] = useState({
    token: "",
    name: "",
  });
  const { token, name } = values;

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = router.query.token as string;
    if (token) {
      const { name } = jwt.decode(token)
        ? (jwt.decode(token) as { name: string })
        : { name: "" };
      setValues({ ...values, token, name });
    }
  }, [router]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register({ token }));
  };

  return <AccountActivation userName={name} handleSubmit={onSubmit} />;
};

export default Activate;
