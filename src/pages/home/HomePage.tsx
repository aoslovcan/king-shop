import {Button, ProductCard} from "../../shared/ui";
import {ArrowRightIcon} from "../../shared/assets/icons";

export const HomePage = () => {

    return (
        <>
            <div className="flex flex-wrap gap-4">
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 1"
                    content={
                        <>
                            <span>200$</span>
                            <p>This is just a test</p>
                            <Button iconAfter={<ArrowRightIcon/>} label="Load more" variant="contained" color="primary" shape="square"/>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 2"
                    content={
                        <>
                            <span>150$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 3"
                    content={
                        <>
                            <span>300$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
                <ProductCard
                    imgSrc="https://picsum.photos/200/300"
                    title="Test 4"
                    content={
                        <>
                            <span>100$</span>
                            <p>This is just a test</p>
                        </>
                    }
                />
            </div>
            <div className="w-full flex justify-center">
                <Button label="Load more" variant="contained" color="primary" shape="square"/>
            </div>

        </>


    )

};
