import pic from "./pic";

export const searchingAndFiltering = (
  req,
  schemaName,
  partialSearchableFields
) => {
  // get all keys that are in schema  such as [title, year, code, startMonth, endMonth] from semesterModel
  const schemaKeys = Object.keys(schemaName.schema.obj);

  // make object by pic function
  const filter = pic(req.query, ["searchTerm", ...schemaKeys]);

  const { searchTerm, ...filterData } = filter;
  const andCondition = [];

  if (searchTerm && partialSearchableFields.length > 0) {
    andCondition.push({
      $or: partialSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      $and: Object.entries(filterData).map(([key, value]) => ({
        [key]: value,
      })),
    });
  }

  return andCondition.length > 0 ? { $and: andCondition } : {};
};
