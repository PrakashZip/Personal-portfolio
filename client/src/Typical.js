import Typical from 'react-typical'

const Type =()=>{
    return (
        <Typical
        steps={['HR Management !', 1300, 'UI/UX Designer !', 1300,'Business Analyst !',1300,'Full Stack Developer !',1300]}
        loop={Infinity}
        wrapper="b"
      />
    )
}
export default Type;