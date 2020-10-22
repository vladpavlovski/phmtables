import React, { useCallback } from 'react'
import { Controller } from 'react-hook-form'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'

const getOpObj = (option, propName, data) => {
  if (option && !option[propName])
    option = data.find(op => op[propName] === option)
  return option
}

const RHFAutocomplete = props => {
  const {
    options,
    control,
    id,
    name,
    optionPropertyToCompare,
    optionPropertyToShow,
    defaultValue,
    label,
    variant,
    renderOption,
    multiple,
    fullWidth,
    renderTags,
  } = props

  const onChange = useCallback(
    ([id, obj]) =>
      obj &&
      getOpObj(obj, optionPropertyToCompare, options) &&
      getOpObj(obj, optionPropertyToCompare, options)[optionPropertyToCompare],
    [optionPropertyToCompare, options]
  )

  const onChangeMultiple = useCallback(([id, obj]) => obj.map(o => o), [])

  return (
    <Controller
      as={
        <Autocomplete
          id={id}
          openOnFocus
          fullWidth={fullWidth}
          multiple={multiple}
          options={options}
          autoHighlight
          filterSelectedOptions
          getOptionLabel={option => {
            const optionObj = getOpObj(option, optionPropertyToCompare, options)
            return (optionObj && optionObj[optionPropertyToShow]) || ''
          }}
          getOptionSelected={(option, value) => {
            const optionObj = getOpObj(value, optionPropertyToCompare, options)
            // console.log(
            //   option &&
            //     optionObj &&
            //     option[optionPropertyToCompare] ===
            //       optionObj[optionPropertyToCompare]
            // )
            return (
              (option &&
                optionObj &&
                option[optionPropertyToCompare] ===
                  optionObj[optionPropertyToCompare]) ||
              ''
            )
          }}
          renderOption={renderOption}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              variant={variant}
              fullWidth={fullWidth}
              value={multiple ? defaultValue : null}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'disabled', // disable autocomplete and autofill
              }}
            />
          )}
          renderTags={renderTags}
        />
      }
      onChange={!multiple ? onChange : onChangeMultiple}
      name={name}
      control={control}
      defaultValue={defaultValue || []}
    />
  )
}

RHFAutocomplete.defaultProps = {
  defaultValue: null,
  multiple: false,
  fullWidth: false,
  autoHighlight: true,
  filterSelectedOptions: true,
}

export { RHFAutocomplete }
