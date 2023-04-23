const render = (container, children) => {
  children.forEach((child) => {
    container.appendChild(child);
  });
  return container;
};

export default render;
