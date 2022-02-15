import { nanoid } from "nanoid";

function SideHours() {

  const hours = []
  for (let i = 0; i <= -1; i++) {
    hours.push(<span key={nanoid()} className='hour'>{i}</span>)
  }

  return (
    <aside className='side-hours'>
      <div className='side-header'></div>
        {hours}
      <div className='calendar-marks'></div>
    </aside>
  );
}

export default SideHours;