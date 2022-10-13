import { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Program from "../components/Program";
import ProjectCard from "../components/ProjectCard";
import styles from "../utils/styles/home.module.scss";

const Home = () => {
  var [age, setAge] = useState(0);
  useEffect(() => {
    var birthdate = new Date("12/11/2002");
    var month_diff = Date.now() - birthdate.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    setAge(Math.abs(year - 1970));
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.about_me} id="about">
          <div className={styles.text}>
            Hey, my name is Jonas Kliefoth I&apos;m {age} years old. At the
            moment I&apos;m living in Itzehoe, Germany which is near Hamburg.
            I&apos;m currently studying in Hamburg at the{" "}
            <a
              href="https://www.iu.de"
              rel="noopener noreferrer"
              className="link"
            >
              IU
            </a>{" "}
            University, majoring in computer science.
          </div>
        </div>
        <div className={styles.badges} id="skills">
          <Badge
            name="Java"
            img_link="/img/skills/java.png"
            link="https://www.java.com/"
          />
          <Badge
            name="Typescript"
            img_link="/img/skills/typescript.png"
            link="https://www.typescriptlang.org"
          />
          <Badge
            name="Javascript"
            img_link="/img/skills/javascript.png"
            link="https://www.javascript.com"
          />
          <Badge
            name="CSS"
            img_link="/img/skills/css.png"
            link="https://www.w3.org/Style/CSS/"
          />
          <Badge
            name="HTML"
            img_link="/img/skills/html.png"
            link="https://www.w3.org/html/"
          />
          <Badge
            name="MongoDB"
            img_link="/img/skills/mongo.png"
            link="https://www.mongodb.com"
          />
          <Badge
            name="MySQL"
            img_link="/img/skills/mysql.png"
            link="https://www.mysql.com"
          />
          <Badge
            name="SQL"
            img_link="/img/skills/sql.png"
            link="https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16"
          />
          <Badge
            name="MQTT"
            img_link="/img/skills/mqtt.png"
            link="https://mqtt.org/"
          />
          <Badge
            name="JSON"
            img_link="/img/skills/json.png"
            link="https://www.json.org/"
          />
          <Badge
            name="NodeJS"
            img_link="/img/skills/node.png"
            link="https://nodejs.org/en/"
          />
          <Badge
            name="React"
            img_link="/img/skills/react.png"
            link="https://reactjs.org"
          />
          <Badge
            name="NextJS"
            img_link="/img/skills/nextjs.png"
            link="https://nextjs.org/"
          />
          <Badge
            name="Sass / Scss"
            img_link="/img/skills/sass.png"
            link="https://sass-lang.com"
          />
          <Badge
            name="Forge"
            img_link="/img/skills/forge.png"
            link="https://docs.minecraftforge.net/en/latest/"
          />
          <Badge
            name="Bukkit"
            img_link="/img/skills/bukkit.png"
            link="https://dev.bukkit.org"
          />
          <Badge
            name="Spigot"
            img_link="/img/skills/spigot.png"
            link="https://www.spigotmc.org"
          />
          <Badge
            name="Github"
            img_link="/img/skills/github.png"
            link="https://github.com"
          />
          <Badge
            name="Unity"
            img_link="/img/skills/unity.png"
            link="https://unity.com/de"
          />
          <Badge
            name="Gradle"
            img_link="/img/skills/gradle.png"
            link="https://gradle.org"
          />
          <Badge
            name="Maven"
            img_link="/img/skills/maven.png"
            link="https://maven.apache.org"
          />
          <Badge
            name="Passport"
            img_link="/img/skills/passport.png"
            link="https://www.passportjs.org"
          />
          <Badge
            name="CSharp"
            img_link="/img/skills/cs.svg"
            link="https://learn.microsoft.com/de-de/dotnet/csharp/"
          />
          <Badge
            name="Express"
            img_link="/img/skills/express.png"
            link="https://expressjs.com"
          />
          <Badge
            name="Docker"
            img_link="/img/skills/docker.png"
            link="https://www.docker.com"
          />
          <Badge
            name="NestJS"
            img_link="/img/skills/nest.svg"
            link="https://nestjs.com"
          />
        </div>

        <div className={styles.programs} id="programs">
          <Program
            name="IntelliJ IDEA"
            img_link="/img/programs/intellij-idea.png"
            link="https://www.jetbrains.com/idea/"
          />
          <Program
            name="IntelliJ Pycharm"
            img_link="/img/programs/intellij-pycharm.png"
            link="https://www.jetbrains.com/pycharm/"
          />
          <Program
            name="IntelliJ Webstorm"
            img_link="/img/programs/intellij-webstorm.png"
            link="https://www.jetbrains.com/webstorm/"
          />
          <Program
            name="VsCode"
            img_link="/img/programs/vsc.png"
            link="https://code.visualstudio.com"
          />
          <Program
            name="Docker Desktop"
            img_link="/img/programs/dockerdesktop.png"
            link=""
          />
          <Program
            name="Github Desktop"
            img_link="/img/programs/githubdesktop.png"
            link=""
          />
          <Program
            name="Krita"
            img_link="/img/programs/krita.png"
            link="https://krita.org/en/"
          />
          <Program
            name="Figma"
            img_link="/img/programs/figma.svg"
            link="https://www.figma.com"
          />
          <Program
            name="Notion"
            img_link="/img/programs/notion.png"
            link="https://www.notion.so"
          />
          <Program
            name="Cloudflare"
            img_link="/img/programs/cloudflare.png"
            link="https://www.cloudflare.com"
          />
        </div>
        <div className={styles.projects} id="projects">
          <ProjectCard
            name="Portfolio"
            link="https://github.com/Kimunachan/Portfolio"
            description="This is my Portfolio (This page)"
          />
          <ProjectCard
            name="Technicu"
            link="https://github.com/Kimunachan/Technicu"
            description="This is a Minecraft mod I created with Nearieveryone"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
