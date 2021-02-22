import React, { useContext } from 'react';
import { Form, Field } from 'react-final-form';
import AppContext from 'contexts/appContext';

interface FormValues {
    sub: string,
    count: number,
};

const SettingsForm = () => {
    const { sub, count, setContext } = useContext(AppContext);

    const onSubmit = ({ sub, count }: FormValues) => {
        setContext({
            sub,
            count,
        });
    };

    return (
        <div>
            <h2>Settings</h2>
            <Form 
                onSubmit={onSubmit}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <label>Which subreddit?</label>
                            <Field 
                                name="sub" 
                                component="input" 
                                placeholder="Subreddit" 
                                initialValue={sub}
                            /> 
                        </div>
                        <div>
                            <label>How many posts?</label>
                            <Field 
                                name="count" 
                                component="input" 
                                placeholder="Count" 
                                initialValue={count}
                            /> 
                        </div>
                        <button type="submit">Save Settings</button>
                    </form>
                )}
            </Form>

        </div>
    );
};

export default SettingsForm;