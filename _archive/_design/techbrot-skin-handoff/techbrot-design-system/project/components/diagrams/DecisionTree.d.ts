/** Binary decision tree (SVG). Internal nodes are questions; leaves render in cobalt. */
export interface DecisionTreeNode {
  /** Use \n for a second line */
  label: string;
  yes?: DecisionTreeNode;
  no?: DecisionTreeNode;
}
export interface DecisionTreeProps {
  root?: DecisionTreeNode;
  caption?: string;
  style?: any;
}
