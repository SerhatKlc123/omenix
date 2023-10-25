
const FooterElement = (props) => {
    return(
    <div className="block">
    <p className="text-sm font-bold pb-3">{props.title}</p>
    <ul className="text-sm">
     {props.names.map((name, index) => (
        <li key={index} className="pb-3 text-gray-300 hover:text-[#176B87]">
          {name}
        </li>
      ))}
    </ul>
</div>)
}

export default FooterElement