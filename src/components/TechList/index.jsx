import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const TechList = () => {
  const { techList } = useContext(UserContext);

  return techList.length > 0 ? (
    <ul className={styles.list}>
      <div className={styles.div}>
        {techList?.map((tech) => (
          <TechCard
            key={tech.id}
            title={tech.title}
            status={tech.status}
            tech={tech}
          />
        ))}
      </div>
    </ul>
  ) : null;
};
