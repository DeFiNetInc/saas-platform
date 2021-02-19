function AddPost() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Platform Name"
        name="Platform Name"
        ref={register({ required: true })}
      />
      <input type="url" placeholder="URL" name="URL" ref={register} />

      <input type="submit" />
    </form>
  );
}
