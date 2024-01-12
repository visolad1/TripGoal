export interface IInfoCardObj{
    id: number,
    title: string,
    description: string,
    img: string
}

export interface IInfoCardTypes{
    obj: IInfoCardObj
}

export interface ILocationCardObj{
    title: string,
    location: string,
    rating: number,
    price: string,
    img: string
}

export interface ILocationCardTypes{
    obj: ILocationCardObj
}

export interface IAboutInfoCardObj{
    id: number,
    count: string,
    description: string
}

export interface IAboutInfoCardTypes{
    obj: IAboutInfoCardObj
}

export interface ITestimonialCardObj{
    id: number,
    testimonial: string,
    name: string,
    designation: string
}

export interface ITestimonialCardTypes{
    obj: ITestimonialCardObj
}