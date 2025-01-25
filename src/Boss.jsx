function Boss({boss}) {
    return (
        <article className="bg-slate-500 text-lg text-white text-center">
          <section>
            <h3>{boss.name}</h3>
          </section>
          <section>
            <div>
                <div>Type: {boss.type}</div>
            </div>
          </section>
        </article>
    );
}

export default Boss;