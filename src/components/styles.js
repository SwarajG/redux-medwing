import { css } from 'emotion';

const wrapper = css`
  display: flex;
  padding: 15px;
`;

const headerText = css`
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 28px;
  font-weight: 600;
  color: #2196F3;
`;

const locationContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 80vh;
  overflow: auto;
`;

const locationWrapper = css`
  margin: 5px;
  min-height: 240px;
  margin-bottom: 40px;
  position: relative;
`;

const locationDescription = css`
  margin-top: 0;
  margin-bottom: 10px;
`;

const childClass = css`
  width: 50%;
  padding: 5px;
`;

const actionsWrapper = css`
  display: flex;
  align-items: center;
`;

const separator = css`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0;
`;

const searchInput = css`
  border: 1px solid #000;
  padding: 3px 7px;
`;

const autocompleteContainer = css`
  position: absolute;
  margin-top: 5px;
  border: 1px solid #C0C0C0;
  border-radius: 3px;
`;

const suggestionItem = css`
  padding: 3px;
  cursor: pointer;
  background-color: #FFF;
`;

const suggestionActive = css`
  padding: 3px;
  background-color: rgb(3,169,244);
  cursor: pointer;
  color: #FFF;
`;

export default {
  wrapper,
  locationContainer,
  childClass,
  locationWrapper,
  headerText,
  locationDescription,
  actionsWrapper,
  separator,
  searchInput,
  autocompleteContainer,
  suggestionItem,
  suggestionActive
};