export function updateEntityInArray<T extends { id?: number }>(
    entities: T[],
    updatedEntity: T
): T[] {
    let updatedEntities = false;

    const newEntities = entities.map(entity => {
        if (entity.id === updatedEntity.id) {
            updatedEntities = true;

            return updatedEntity;
        } else {
            return entity;
        }
    });

    return newEntities.concat(updatedEntities ? [] : [updatedEntity]);
}

export function deleteEntityInArray<T extends { id?: number }>(
    entities: T[],
    deletedEntity: T
): T[] {
    return entities.filter(entity => entity.id !== deletedEntity.id);
}