import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import styled from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';

const StyledDatePickerWrapper = styled.div`
    & .SingleDatePicker,
    .SingleDatePickerInput {
        .DateInput {
            width: 30rem;
            height: 40px;
            display: flex;

            .DateInput_input {
                font-size: 1rem;
                border-bottom: 0;
                padding: 12px 16px 14px;
            }
        }

        .SingleDatePickerInput__withBorder {
            border-radius: 4px;
            overflow: hidden;

            :hover,
            .DateInput_input__focused {
                border: 1px solid red;
            }

            .CalendarDay__selected {
                background: blue;
                border: blueviolet;
            }
        }

        .SingleDatePicker_picker.SingleDatePicker_picker {
            top: 43px;
            left: 2px;
            /* top: 43px !important;
      left: 2px !important; */
        }
    }
`;

export default class DatePicker extends React.Component {
    state = {
        focused: false,
        date: moment(),
    };
    render() {
        return (
            <StyledDatePickerWrapper>
                <SingleDatePicker
                    numberOfMonths={1}
                    onDateChange={(date) => this.setState({ date })}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    focused={this.state.focused}
                    date={this.state.date}
                />
            </StyledDatePickerWrapper>
        );
    }
}
