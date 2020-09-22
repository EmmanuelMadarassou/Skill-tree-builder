export function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map((item) => {
        if (item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });

    return updatedItems;
}

export const logger = (store) => (next) => (action) => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        console.error("Caught an exception!", err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState(),
            },
        });
        throw err;
    }
};