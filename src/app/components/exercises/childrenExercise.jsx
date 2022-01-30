import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

// React.Children.map
const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div className="d-flex">
                <span className="mx-2">{index + 1}.</span>
                <div>{child}</div>
            </div>
        );
    });
};

// React.Children.toArray
// const ListComponent = ({ children }) => {
//     const childArray = React.Children.toArray(children);
//     return (
//         <>
//             {childArray.map((child, index) => {
//                 return (
//                     <div className="d-flex" key={index}>
//                         <span className="mx-2">{index + 1}.</span>
//                         <div>{child}</div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
