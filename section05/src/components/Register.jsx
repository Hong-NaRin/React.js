import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState();
  // const [bio, setBio] = useState("");

  // 한 번에 처리하는 방법
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // [e.target.name]이 name임
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   // console.log(e);
  //   setName(e.target.value);
  //   // setInput({ ...input, name: e.target.value });
  // };

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  //   // setInput({ ...input, birth: e.target.value });
  // };

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  //   // setInput({ ...input, country: e.target.value });
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  //   // setInput({ ...input, bio: e.target.value });
  // };

  return (
    <div>
      <div>
        {/* <input value={name} onChange={onChangeName} placeholder={"이름"} /> */}
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      {/* {name} */}
      <div>
        {/* <input type="date" value={birth} onChange={onChangeBirth} />{" "} */}
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
        {/* {birth} */}
      </div>
      <div>
        {/* <select value={country} onChange={onChangeCountry}> */}
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {/* {country} */}
      </div>

      <div>
        {/* <textarea value={bio} onChange={onChangeBio} /> */}
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
