const CardComponent = () => {
    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-10">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="h-full w-full" src="http://placeimg.com/240/360/any" alt="" />

                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            Jane Doe
                        </div>
                        <div className="text-sm text-gray-500">
                            <a href="mailto:oduneye.d@northeastern.edu">
                                Mail
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardComponent;