import { FC } from "react";
import Collapse, { Panel } from "rc-collapse";
import { CollapseProps } from "rc-collapse/es/interface";
import clsx from "clsx";

import motion from "./motion.util";

import { IPanels } from "./panels.interface";

import "rc-collapse/assets/index.css";

interface RcCollapseProps {
  className?: string;
  reverse?: boolean;
  panels: IPanels | IPanels[];
  defaultActiveKey?: CollapseProps["defaultActiveKey"];
  accordion?: CollapseProps["accordion"];
  expandIcon?: CollapseProps["expandIcon"];
  collapsible?: CollapseProps["collapsible"];
}

const RcCollapse: FC<RcCollapseProps> = ({
  className,
  reverse,
  panels,
  defaultActiveKey,
  accordion,
  expandIcon = () => {
    return <span className="rc-collapse__arrow"></span>;
  },
  collapsible = "header",
}) => {
  const panelItems = Array.isArray(panels) ? (
    panels.map((panel) => {
      const { key, header, content } = panel;

      return (
        <Panel key={key} header={header}>
          {content}
        </Panel>
      );
    })
  ) : (
    <Panel header={panels.header}>{panels.content}</Panel>
  );

  return (
    <Collapse
      className={clsx(className, reverse && "rc-collapse_reverse")}
      accordion={accordion}
      openMotion={motion}
      defaultActiveKey={defaultActiveKey}
      expandIcon={expandIcon}
      collapsible={collapsible}
    >
      {panelItems}
    </Collapse>
  );
};

export default RcCollapse;
