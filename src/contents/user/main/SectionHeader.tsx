import React from "react";
import "src/assets/css/common.css";

interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return <h2 className="section-header">{title}</h2>;
};

export default SectionHeader;
