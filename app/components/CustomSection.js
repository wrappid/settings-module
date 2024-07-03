import { CoreCard, CoreCardHeader, CoreH5, CoreClasses, CoreCardContent } from "@wrappid/core";

export default function CustomSection(props) {
  const { styleClasses = [], elevated } = props;

  return (
    <CoreCard
      elevated={elevated}
      styleClasses={[CoreClasses.MARGIN.MB1, ...styleClasses]}
    >
      <CoreCardHeader
        styleClasses={[CoreClasses.PADDING.PB0]}
        title={props?.heading && <CoreH5>{props?.heading}</CoreH5>}
      />

      <CoreCardContent styleClasses={[]}>{props?.children}</CoreCardContent>
    </CoreCard>
  );
}
