export default function Statistics([{ title, stats }]) {
   
    return ( <section className="statistics">
      { ({ title }) &&
   
            <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(st=>(
    <li className="item" id={st.id}>
                    <span className="label">{st.label}</span>
                    <span classname="percentage">{st.percentage}</span>
    </li>))}
   
  </ul>
</section>);
}