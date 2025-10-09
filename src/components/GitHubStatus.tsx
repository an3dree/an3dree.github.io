export default function GitHubStats() {
  return (
    <section className="github-stats-section">
      <h2 className="section-title">GitHub Stats</h2>
      <div className="stats-container">
       <img 
          height="180em"
          src="https://github-readme-stats.vercel.app/api?username=Andre-Souza-Dev&show_icons=true&include_all_commits=true&hide_border=true&title_color=61dafb&icon_color=61dafb&text_color=e0e0e0&bg_color=282c34"
          alt="André Souza's GitHub Stats"
        /> 

        <img 
          height="180em"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Andre-Souza-Dev&layout=compact&langs_count=7&hide_border=true&title_color=61dafb&text_color=e0e0e0&bg_color=282c34"
          alt="André Souza's Top Languages"
        />
      </div>

    </section>
  );
}
