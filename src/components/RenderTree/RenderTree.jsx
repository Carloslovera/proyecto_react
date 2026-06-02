import treeData from "../../data/renderTreeData";
import "./RenderTree.css";

function TreeNode({ node }) {
  return (
    <div className="tree-node-wrapper">
      <div className="tree-node">
        <span className="tree-icon">{node.icon}</span>

        <span className="tree-label">{node.name}</span>
      </div>

      {node.children && (
        <div className="tree-children">
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RenderTree() {
  return (
    <section className="render-tree-container">
      <TreeNode node={treeData} />
    </section>
  );
}
