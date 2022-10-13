import { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
            University with specialization on computer science.
          </div>
        </div>
        <div className={styles.badges} id="skills">
          <Badge
            name="Java"
            img_link="/img/java.png"
            link="https://www.java.com/"
          />
          <Badge
            name="Typescript"
            img_link="/img/typescript.png"
            link="https://www.typescriptlang.org"
          />
          <Badge
            name="Javascript"
            img_link="/img/javascript.png"
            link="https://www.javascript.com"
          />
          <Badge
            name="CSS"
            img_link="/img/css.png"
            link="https://www.w3.org/Style/CSS/"
          />
          <Badge
            name="HTML"
            img_link="/img/html.png"
            link="https://www.w3.org/html/"
          />
          <Badge
            name="MongoDB"
            img_link="/img/mongo.png"
            link="https://www.mongodb.com"
          />
          <Badge
            name="MySQL"
            img_link="/img/mysql.png"
            link="https://www.mysql.com"
          />
          <Badge
            name="MQTT"
            img_link="/img/mqtt.png"
            link="https://mqtt.org/"
          />
          <Badge
            name="JSON"
            img_link="/img/json.png"
            link="https://www.json.org/"
          />
          <Badge
            name="NodeJS"
            img_link="/img/node.png"
            link="https://nodejs.org/en/"
          />
          <Badge
            name="React"
            img_link="/img/react.png"
            link="https://reactjs.org"
          />
          <Badge
            name="NextJS"
            img_link="/img/nextjs.png"
            link="https://nextjs.org/"
          />
          <Badge
            name="Sass / Scss"
            img_link="/img/sass.png"
            link="https://sass-lang.com"
          />
          <Badge
            name="Forge"
            img_link="/img/forge.png"
            link="https://docs.minecraftforge.net/en/latest/"
          />
          <Badge
            name="Bukkit"
            img_link="/img/bukkit.png"
            link="https://dev.bukkit.org"
          />
          <Badge
            name="Spigot"
            img_link="/img/spigot.png"
            link="https://www.spigotmc.org"
          />
          <Badge
            name="Github"
            img_link="/img/github.png"
            link="https://github.com"
          />
          <Badge
            name="Unity"
            img_link="/img/unity.png"
            link="https://unity.com/de"
          />
          <Badge
            name="Gradle"
            img_link="/img/gradle.png"
            link="https://gradle.org"
          />
          <Badge
            name="Maven"
            img_link="/img/maven.png"
            link="https://maven.apache.org"
          />
          <Badge
            name="Passport"
            img_link="/img/passport.png"
            link="https://www.passportjs.org"
          />
          <Badge
            name="CSharp"
            img_link="/img/cs.svg"
            link="https://learn.microsoft.com/de-de/dotnet/csharp/"
          />
          <Badge
            name="Express"
            img_link="/img/express.png"
            link="https://expressjs.com"
          />
          <Badge
            name="Docker"
            img_link="/img/docker.png"
            link="https://www.docker.com"
          />
          <Badge
            name="NestJS"
            img_link="/img/nest.svg"
            link="https://nestjs.com"
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
