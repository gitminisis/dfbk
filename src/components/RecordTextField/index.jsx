
import PropTypes from "prop-types";
import Component from "../Component";
import { deepSearch } from "../../utils/functions";
const index = (props) => {
  const { displayFields, recordData, recordLink, gridDisplay, xml } = props;
  let DisplayComponent = props.displayComponent;




  return displayFields.map((field) => {
    if (field.duplicate) return;
    if (gridDisplay && field.gridDisplay === false) {
      return;
    }
    let defaultValue = field.defaultValue;
    let sameLabelField = displayFields.filter((e, i) => e.label === field.label);
    let fieldValue;
    if (sameLabelField.length > 1) {
      debugger;
      displayFields.filter((e, i) => e.label === field.label).filter((e, i) => i !== 0).forEach(e => { e.duplicate = true })
      fieldValue = sameLabelField.map(e => deepSearch(recordData, e.name.toLowerCase())[0])
    }
    else {
      fieldValue =
        typeof defaultValue !== "undefined"
          ? [defaultValue]
          : deepSearch(recordData, field.name.toLowerCase());
    }


    if (fieldValue.length === 0) {
      return;
    }
    let fieldLabel = field.label;

    if (field.component !== undefined) {
      field.data.xml = xml;
      field.data.record = recordData;
      return Component(field);
    }

    return (
      <DisplayComponent
        key={fieldValue}
        recordLink={recordLink}
        main={field.main}
        label={fieldLabel}
        value={fieldValue}
        showMore={field.showMore}
        maxLength={field.maxLength}
      />
    );
  });
};

index.propTypes = {};

export default index;
