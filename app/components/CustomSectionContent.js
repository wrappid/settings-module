import { CoreCard, CoreCardContent, CoreClasses } from "@wrappid/core";

export default function CustomSectionContent(props) {
  const { styleClasses = [], elevated } = props;

  return (
    <CoreCard
      elevated={elevated}
      styleClasses={[CoreClasses.MARGIN.MB2, ...styleClasses]}
    >

      <CoreCardContent styleClasses={[]}>{props?.children}</CoreCardContent>
    </CoreCard>
  );
}
