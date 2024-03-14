import styles from "./InfoItem.module.scss";

type InfoItemType = {
  href: string;
  children: React.ReactNode;
  className: string;
};

const InfoItem = ({ href, children, className }: InfoItemType) => {
  return (
    <div className={`${className}`}>
      <a href={href} className={styles.item_link}>
        {children}
      </a>
    </div>
  );
};

export default InfoItem;
