import { CoreCard, CoreCardHeader, CoreH5, CoreClasses } from "@wrappid/core";

export default function CustomSectionHeader(props) {
  const { styleClasses = [], elevated } = props;

  return (
    <CoreCard
      elevated={elevated}
      styleClasses={[CoreClasses.MARGIN.MB1, ...styleClasses]}
    >
      <CoreCardHeader
        styleClasses={[]}
        title={props?.heading && <CoreH5>{props?.heading}</CoreH5>}
      />

    </CoreCard>
  );
}
