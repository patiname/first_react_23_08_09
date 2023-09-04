import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMesaage } from "../components/ErrorMesaage";
import { userData } from "../userData";
import { useNavigate } from "react-router-dom";
import { Wrap, Form, Title, Input } from "../components/Styeld";
import { Button } from "../components/Button";

export const Login = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.username);
    // console.log(data.password);
    // const inputUsername = data.username;
    // const inputPassword = data.password;
    const { username, password } = data;
    // =>user가 input에 입력한 value값을 비구조화 할당으로 표현

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

    nav("/");
    // =>경로를 지정하여 페이지를 이동 시킬 수 있음
  };
  // console.log(errors);
  // console.log(errors && errors.username && errors.username.message);
  // console.log(errors?.username?.message);
  // *옵셔널체이닝(optional chaining)
  // =>중첩 객체를 에러 없이 안전하게 접근할 수 있음

  // console.log(isValid);

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          placeholder="아이디"
        />
        <ErrorMesaage text={errors?.username?.message} />

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

        <Button isValid={isValid} text={"로그인"} />
      </Form>
    </Wrap>
  );
};

// *useForm
// =>폼 관련 패키지(모듈)로 유효성 검사 등 다양한 역할을
// 쉽게 개발 할 수 있음
// ex)
// const {
//   register,
//   handleSubmit,
//   formState: { errors, isValid },
// } = useForm();

// 1.register: input 엘리먼트에 적용, useForm에 등록 하는 역할
// <input {...register("이름", {
//   required: 필수인지 아닌지, ""를 이용하여 에러메세지를 작성할수있음,
//   minLength:{
//     value: 8 (최소 작성 길이 지정),
//     message: "에러메세지 작성"
//   }
// })} />

// 2.handleSubmit: 폼 이벤트 부분을 담당

// 3.formState: 폼 상태를 확인함
// =>errors: 유효성 검사 중 에러내용을 가져올 수 있음
// =>isValid: 유효성 검사가 참인지 거짓인지 boolean으로 반환함

// *spread operator (전개 구문)
// =>객체, 배열등 문법을 전개하여 내부에 있는 내용을 쉽게 가져옴
// => ...배열명
// => ...객체명
