const validateProductForm = (data) => {
    const errors = {};

    // Title validation
    if (!data.title || data.title.trim() === "") {
        errors.title = "Title is required";
    } else if (data.title.length < 3) {
        errors.title = "Title must be at least 3 characters long";
    }

    // Amount validation
    if (!data.amount) {
        errors.amount = "Amount is required";
    } else if (isNaN(data.amount) || Number(data.amount) <= 0) {
        errors.amount = "Amount must be a positive number";
    }

    // Category validation
    if (!data.category || data.category === "") {
        errors.category = "Category is required";
    }

    // Quantity validation
    if (!data.quantity) {
        errors.quantity = "Quantity is required";
    } else if (!Number.isInteger(Number(data.quantity)) || Number(data.quantity) < 0) {
        errors.quantity = "Quantity must be a non-negative integer";
    }

    // Tags validation (optional)
    if (data.tags.length > 5) {
        errors.tags = "You cannot have more than 5 tags";
    }

    // Discount validation (optional)
    if (data.discount && (isNaN(data.discount) || data.discount < 0 || data.discount > 100)) {
        errors.discount = "Discount must be between 0 and 100";
    }

    // Description validation (optional)
    if (data.description && data.description.length < 10) {
        errors.description = "Description must be at least 10 characters long";
    }

    // Image validation (optional)
    if (data.image && data.image.length > 5) {
        errors.image = "You can only upload up to 5 images";
    }

    // Video validation (optional)
    if (data.video && !isValidURL(data.video)) {
        errors.video = "Invalid video URL";
    }

    // Dimensions validation
    if (data.measurement.height && (isNaN(data.measurement.height) || data.measurement.height <= 0)) {
        errors.measurement = errors.measurement || {};
        errors.measurement.height = "Height must be a positive number";
    }
    if (data.measurement.width && (isNaN(data.measurement.width) || data.measurement.width <= 0)) {
        errors.measurement = errors.measurement || {};
        errors.measurement.width = "Width must be a positive number";
    }
    if (data.measurement.length && (isNaN(data.measurement.length) || data.measurement.length <= 0)) {
        errors.measurement = errors.measurement || {};
        errors.measurement.length = "Length must be a positive number";
    }
    if (data.measurement.weight && (isNaN(data.measurement.weight) || data.measurement.weight <= 0)) {
        errors.measurement = errors.measurement || {};
        errors.measurement.weight = "Weight must be a positive number";
    }

    // SKU/Barcode validation (optional)
    if (data.sku && !/^[a-zA-Z0-9]+$/.test(data.sku)) {
        errors.sku = "SKU must be alphanumeric";
    }
    if (data.barcode && !/^[a-zA-Z0-9]+$/.test(data.barcode)) {
        errors.barcode = "Barcode must be alphanumeric";
    }

    // Variations validation (optional)
    if (data.variations.length > 0) {
        data.variations.forEach((variation, index) => {
            if (!variation.name || variation.name.trim() === "") {
                errors.variations = errors.variations || [];
                errors.variations[index] = errors.variations[index] || {};
                errors.variations[index].name = "Variation name is required";
            }
            if (variation.price && (isNaN(variation.price) || variation.price <= 0)) {
                errors.variations = errors.variations || [];
                errors.variations[index] = errors.variations[index] || {};
                errors.variations[index].price = "Variation price must be a positive number";
            }
        });
    }

    // Availability status validation
    if (!data.availType || data.availType === "") {
        errors.availType = "Product status is required";
    }

    return errors;
};

// Utility function to validate URLs
const isValidURL = (string) => {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
};

export default validateProductForm;
