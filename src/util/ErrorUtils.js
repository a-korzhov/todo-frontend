export const getErrorResponseWithValidationDetails = (error) => {
    let parsedDetails = [];

    error.details.forEach((detail) => {
        detail.issue.split(',').forEach((issue, issueIdx) => {
            parsedDetails.push({
                id: `${detail.field}_${issueIdx}`,
                field: detail.field,
                issue: issue
            });
        })
    })
    console.log(parsedDetails);
    return {
        message: '',
        details: parsedDetails
    }
}