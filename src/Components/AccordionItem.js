export default function AccordionItem({ num, title, text, curOpen, setCurOpen }) {
  const isOpen = curOpen === num;

  function handleToggle(num) {
    console.log(isOpen)
    setCurOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => handleToggle(num)}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <h3 className="text">{title}</h3>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
