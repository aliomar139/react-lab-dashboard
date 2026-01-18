function ResourceItem({ title, description, badge }) {
  return (
    <li className="resource-item">
      <div className="resource-content">
        <h3 className="heading-small">
          {title}
          {badge && <span className="badge">{badge}</span>}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ResourceItem;
