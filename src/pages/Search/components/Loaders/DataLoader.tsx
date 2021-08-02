import React from "react"
import ContentLoader from "react-content-loader"

const DataLoader = () => (
  <ContentLoader 
    speed={2}
    width={1160}
    height={280}
    viewBox="0 0 1160 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="156" y="76" rx="0" ry="0" width="13" height="1" /> 
    <rect x="10" y="50" rx="20" ry="20" width="284" height="280" /> 
    <rect x="339" y="50" rx="20" ry="20" width="870" height="280" />
  </ContentLoader>
)

export default DataLoader

