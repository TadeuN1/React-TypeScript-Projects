type GreetingProps = {
    name: string;
}

const Greetings = ( { name }: GreetingProps ) => {
  return (
    <div> Olá, {name}. </div>
  )
}

export default Greetings