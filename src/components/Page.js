import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Factory } from './Factory';
import { Button } from 'react-bootstrap';

export const Page = () => {
    const steps = useSelector(s => s.steps)

    const dispatch = useDispatch()

    const page = Factory.getComponent(steps.current)

    const onPlusClickHandler = page.onPlusClick ? () => {
        dispatch(page.onPlusClick())
    } : null

    {
        console.log(steps.current)
    }

    return (
        <div style={{paddingBottom: '100px'}}>
            {page.component}
            {onPlusClickHandler &&
                <Button className='rounded-circle' size='md'
                    style={{ position: 'fixed', width: '50px', height: '50px', bottom: '150px', right: '20px' }}
                    onClick={onPlusClickHandler}>+</Button>}
        </div>)
}