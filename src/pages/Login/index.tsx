import React from "react";
import { Container, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";

const BoxFormLogin = styled("form")(() => ({
  width: 400,
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  marginTop: 56
}));

const InputLogin = styled("input")(() => ({
  width: "100%",
  padding: "4px 15px",
  fontSize: 16,
  outline: "none",
}));

const ButtonLogin = styled(Button)({
  background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
  margin: "auto",
  marginTop: 28,
  minWidth: 296,
  maxWidth: "100%",
  minHeight: 56,
  fontSize: 18,
  lineHeight: "26px",
  textAlign: "center",
  color: "#FFFFFF",
  display: "flex",
});
const ErrorTxt = styled("span")({
  fontSize: 14,
  lineHeight: "18px",
  color: "#fb4545",
  marginTop: 5,
});


type Inputs = {
  userName: string;
};

const Login: React.FC<any> = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    props.handleSubmitLogin(data);

  return (
    <>
      <Container maxWidth="md">
        <BoxFormLogin onSubmit={handleSubmit(onSubmit)}>
          <InputLogin placeholder="User Name" {...register("userName", { required: true })} />
          {errors.userName && <ErrorTxt>This field is required</ErrorTxt>}

          <ButtonLogin type="submit">Login</ButtonLogin>
        </BoxFormLogin>
      </Container>
    </>
  );
};

export default Login;
