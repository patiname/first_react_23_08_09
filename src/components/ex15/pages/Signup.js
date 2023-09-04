import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMesaage } from "../components/ErrorMesaage";
import { userData } from "../userData";
import { useNavigate } from "react-router-dom";
import { Wrap, Form, Title, Input } from "../components/Styeld";
import { Button } from "../components/Button";

export const Signup = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;

    if (username !== userData.username) {
      setError("username", {
        message: "아이디가 틀렸습니다",
      });
    }

    if (password !== userData.password) {
      setError("password", {
        message: "비밀번호가 틀렸습니다",
      });
    }

    nav("/login");
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign up</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          placeholder="아이디"
        />
        <ErrorMesaage text={errors?.username?.message} />

        <Input
          {...register("email", {
            required: false,
          })}
          placeholder="이메일"
        />
        <ErrorMesaage text={errors?.email?.message} />

        <Input
          {...register("name", {
            required: "이름은 필수 입니다",
          })}
          placeholder="이름"
        />
        <ErrorMesaage text={errors?.name?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMesaage text={errors?.password?.message} />

        <Button isValid={isValid} text={"회원가입"} />
      </Form>
    </Wrap>
  );
};
