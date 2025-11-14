export default function CareerPage() {

    return (<>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontFamily: "Fira Code, monospace"
        }}>
            <div >
                <h1>Career log</h1>
            </div>
            <hr />
            <div >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <h2>Avanade | 2021 ~ Present</h2>

                </div>

            </div>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <h2>epione | 2020 ~ 2021 </h2>
                <hr />
                <span>out/2020 ~ apr/2021 - 6 months</span>
                <h3>Full Stack Dev</h3>
                <p style={{ textAlign: "left", color: "white" }}>
                    epione is a health startup where i do my intership. There i worked on developing health-related applications and improving user experience.
                    Technologies I used there were mainly modern Angular and some backend with Node.js.
                </p>
            </div>
        </div>
    </>);
}