import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
   
  return (<section className={s.statistics} >
 <div className={s.titleBox}>
      { title &&
        <h2 className={s.title}>{title}</h2>
      }
    </div>
    <ul className={s.statList}>
            {stats.map(stat=>(
              <li className={s.item}  key={stat.id} style={{backgroundColor: randColor()}}>
                <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}%</span>
    </li>))}
   
  </ul>
</section>);
}
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

