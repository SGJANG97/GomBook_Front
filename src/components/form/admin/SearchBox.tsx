import RangeDateSearchForm, {
  RangeDateProps,
} from 'src/components/form/admin/searchForm/RangeDateSearchForm';
import DateSearchForm, {
  DateProps,
} from 'src/components/form/admin/searchForm/DateSearchForm';
import SelectSearchForm, {
  SelectProps,
} from 'src/components/form/admin/searchForm/SelectSearchForm';
import SelectListSearchForm, {
  SelectListProps,
} from 'src/components/form/admin/searchForm/SelectListSearchForm';
import SelectInputSearchForm, {
  SelectInputProps,
} from 'src/components/form/admin/searchForm/SelectInputSearchForm';
import InputSearchForm, {
  InputProps,
} from 'src/components/form/admin/searchForm/InputSearchForm';
import CheckboxSearchForm, {
  CheckboxProps,
} from 'src/components/form/admin/searchForm/CheckboxSearchForm';
import RadioboxSearchForm, {
  RadioProps,
} from 'src/components/form/admin/searchForm/RadioboxSearchForm';
import ButtonSearchForm, {
  ButtonsProps,
} from 'src/components/form/admin/searchForm/ButtonSearchForm';

interface RangeDateSearchFormItem extends RangeDateProps {
  itemType: 'range_date';
}

interface DateSearchFormItem extends DateProps {
  itemType: 'date';
}

interface SelectSearchFormItem extends SelectProps {
  itemType: 'select';
}

interface SelectListSearchFormItem extends SelectListProps {
  itemType: 'select_list';
}

interface SelectInputSearchFormItem extends SelectInputProps {
  itemType: 'select_input';
}

interface InputSearchFormItem extends InputProps {
  itemType: 'input';
}

interface CheckboxSearchFormItem extends CheckboxProps {
  itemType: 'check';
}

interface RadioSearchFormItem extends RadioProps {
  itemType: 'radio';
}

interface ButtonSearchFormItem extends ButtonsProps {
  itemType: 'button';
}

interface Props {
  title?: string;
  items: (
    | RangeDateSearchFormItem
    | DateSearchFormItem
    | SelectSearchFormItem
    | SelectListSearchFormItem
    | SelectInputSearchFormItem
    | InputSearchFormItem
    | CheckboxSearchFormItem
    | RadioSearchFormItem
    | ButtonSearchFormItem
  )[];
}

export default function SearchBox(props: Props) {
  const { title = '', items } = props;
  return (
    <>
      <section className="lt-section">
        <h3 className="lt-title-type2">{title}</h3>
        <div className="admin-tbl">
          {items?.map((item, idx) => {
            if (item.itemType === 'range_date') {
              return (
                <RangeDateSearchForm
                  label={item.label}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  key={`search-box-item-${idx}`}
                  onChangeStartDateCallback={item.onChangeStartDateCallback}
                  onChangeEndDateCallback={item.onChangeEndDateCallback}
                  quickButtons={item.quickButtons}
                />
              );
            }
            if (item.itemType === 'date') {
              return (
                <DateSearchForm
                  label={item.label}
                  value={item.value}
                  key={`search-box-item-${idx}`}
                  onChangeDateCallback={item.onChangeDateCallback}
                />
              );
            }
            if (item.itemType === 'select') {
              return (
                <SelectSearchForm
                  label={item.label}
                  value={item.value}
                  options={item.options}
                  onChangeCallBack={item.onChangeCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }
            if (item.itemType === 'select_list') {
              return (
                <SelectListSearchForm
                  label={item.label}
                  selectList={item.selectList}
                  onChangeCallBack={item.onChangeCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }
            if (item.itemType === 'select_input') {
              return (
                <SelectInputSearchForm
                  label={item.label}
                  inputValue={item.inputValue}
                  selectValue={item.selectValue}
                  options={item.options}
                  inputPlaceholder={item.inputPlaceholder}
                  onChangeInputCallBack={item.onChangeInputCallBack}
                  onChangeSelectCallBack={item.onChangeSelectCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }
            if (item.itemType === 'input') {
              return (
                <InputSearchForm
                  label={item.label}
                  value={item.value}
                  onChangeCallBack={item.onChangeCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }
            if (item.itemType === 'check') {
              return (
                <CheckboxSearchForm
                  label={item.label}
                  options={item.options}
                  values={item.values}
                  onChangeCallBack={item.onChangeCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }
            if (item.itemType === 'radio') {
              return (
                <RadioboxSearchForm
                  label={item.label}
                  options={item.options}
                  onChangeCallBack={item.onChangeCallBack}
                  key={`search-box-item-${idx}`}
                />
              );
            }

            if (item.itemType === 'button') {
              return (
                <ButtonSearchForm
                  buttons={item.buttons}
                  key={`search-box-item-${idx}`}
                />
              );
            }
          })}
        </div>
      </section>
    </>
  );
}
