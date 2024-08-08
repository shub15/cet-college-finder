import React from 'react'

const optionBox = "h-10 max-w-full rounded-md border-0 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-semibold sm:text-sm";

export default function SearchCollege() {
    return (
        <div>
            <form id="SearchInstitute" className="min-h-screen bg-gray-100 text-lg flex items-center justify-center">
                <div className="container max-w-screen-xl">
                    <div className="my-10 md:mt-0">
                        <p className="text-2xl font-bold">Search Institutes </p>
                    </div>
                    <div className="bg-slate-200 p-10 md:rounded-xl">
                        <div className="grid gap-20 md:gap-10 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
                            <div className="grid gap-4 grid-cols-1">
                                <label htmlFor="Departement Name">Department Name</label>
                                <select
                                    id="CETDepartementName"
                                    name="CETDepartementName"
                                    className={optionBox}
                                >
                                    <option value={0}> All </option>
                                    <option value={1}> Higher Education </option>
                                    <option value={2}> Technical Education </option>
                                    <option value={3}> Agriculture Education </option>
                                    <option value={4}> Fine Art Education </option>
                                    <option value={5}> Medical Education </option>
                                    <option value={6}> AYUSH </option>
                                </select>
                                <br />
                                <br />
                                <label htmlFor="Institute Status">Institute Status</label>
                                <select
                                    id="nstituteStatus1"
                                    name="nstituteStatus1"
                                    className={optionBox}
                                >
                                    <option value={0}> All </option>
                                    <option value={1}> Government </option>
                                    <option value={2}> Government-Aided </option>
                                    <option value={3}> University Department </option>
                                    <option value={4}> University Managed </option>
                                    <option value={5}> University Managed (Un-Aided) </option>
                                    <option value={6}> Un-Aided </option>
                                    <option value={7}> Deemed University </option>
                                    <option value={8}>
                                        {" "}
                                        Central Government Managed Unaided Institute{" "}
                                    </option>
                                    <option value={9}> Minority Wing </option>
                                    <option value={10}> University </option>
                                    <option value={11}> Government Aided Autonomous </option>
                                    <option value={12}> Aided-Minority </option>
                                    <option value={13}> Government Self Financed </option>
                                    <option value={14}> Govt. Aided Autonomous Minority </option>
                                    <option value={15}> UnAided Autonomous </option>
                                    <option value={16}> Un-Aided Minority </option>
                                    <option value={17}>
                                        {" "}
                                        University Managed Unaided College / Department{" "}
                                    </option>
                                    <option value={18}>
                                        {" "}
                                        University Managed Aided College / Departments{" "}
                                    </option>
                                    <option value={19}> Government Aided </option>
                                    <option value={20}> Corporation </option>
                                    <option value={21}> Private/ Un-aided </option>
                                    <option value={22}> Central Government </option>
                                </select>
                            </div>
                            <div className="grid gap-4 grid-cols-1 md:col-span-1">
                                <label htmlFor="Course Type">Course Name</label>
                                <select id="CourseName" name="CourseName" className={optionBox}>
                                    {" "}
                                    <option value={0}> All </option>
                                    <option value={1}> Master of Technology (M. Tech.)</option>
                                    <option value={2}> Master of Engineering (M. E.)</option>
                                    <option value={3}> Master in Computer Application (M.C.A.)</option>
                                    <option value={4}> Bachelor of Technology (B. Tech.)</option>
                                    <option value={5}> Bachelor of Engineering (B. E.)</option>
                                </select>
                                <br />
                                <br />
                                <label htmlFor="Sub Course Name">Minority Status</label>
                                <select
                                    id="MinorityStatus"
                                    name="MinorityStatus"
                                    className={optionBox}
                                >
                                    <option value={0}> All </option>
                                    <option value={1}> Non-Minority </option>
                                    <option value={2}> Linguistic Minority - Gujarathi </option>
                                    <option value={3}> Linguistic Minority - Gujarathi (Kutchhi) </option>
                                    <option value={4}> Linguistic Minority - Hindi </option>
                                    <option value={5}> Linguistic Minority - Malyalam </option>
                                    <option value={6}> Linguistic Minority - Sindhi </option>
                                    <option value={7}> Religious Minority - Jain </option>
                                    <option value={8}> Religious Minority - Muslim </option>
                                    <option value={9}> Religious Minority - Roman Catholics </option>
                                    <option value={10}> Linguistic Minority - Hindi(Bhojpuri) </option>
                                    <option value={11}> Linguistic Minority - Punjabi </option>
                                    <option value={12}> Religious Minority - Sikh </option>
                                    <option value={13}> Religious Minority - Christian </option>
                                    <option value={14}> Linguistic Minority - South Indian </option>
                                    <option value={15}> Linguistic Minority - Tamil </option>
                                    <option value={16}> Linguistic Minority - Urdu </option>
                                    <option value={17}> Linguistic Minority - Kannada </option>
                                    <option value={18}> Linguistic Minority - Gujarathi(Jain) </option>
                                    <option value={19}> Religious Minority - Buddhist </option>
                                    <option value={20}> Religious-Lingustic - Parsi / Gujrati </option>
                                    <option value={21}>
                                        {" "}
                                        Religious Minority (Jain) &amp; Linguistic Minority(Gujarathi){" "}
                                    </option>
                                    <option value={22}>
                                        {" "}
                                        Relogious Minority Muslim &amp; Linguistic Minority Urdu{" "}
                                    </option>
                                    <option value={23}> Linguistic Minority - Gujar </option>
                                    <option value={25}> Religious Minority - Parsi </option>
                                    <option value={27}> Religious Minority - Zorostrian </option>
                                    <option value={28}> Linguistic Minority - Konkani </option>
                                    <option value={29}> Linguistic Minority - Marwadi </option>
                                    <option value={30}> Not Applicable </option>
                                    <option value={31}> Religious Minority - Sindhi </option>
                                </select>
                            </div>
                            <div className="grid gap-4 grid-cols-1 md:col-span-1">
                                <label htmlFor="Sub Course Name">Sub Course Name</label>
                                <select
                                    id="SubCourseName"
                                    name="SubCourseName"
                                    className={optionBox}
                                >
                                    {" "}
                                    <option value={0}> All </option>
                                    <option value={22002}> Aeronautical Engineering</option>
                                    <option value={22011}> Agricultural Engineering</option>
                                    <option value={22012}> Agriculture Engineering</option>
                                    <option value={22043}> Town and Country Planning</option>
                                    <option value={22082}> Bio Technology</option>
                                    <option value={22191}> Civil Engineering</option>
                                    <option value={22192}>
                                        {" "}
                                        Civil Engineering (Construction Technology)
                                    </option>
                                    <option value={22195}> Civil and Water Management Engineering</option>
                                    <option value={22201}> Environmental Engineering</option>
                                    <option value={22214}> Environmental Science and Technology</option>
                                    <option value={22219}> Robotics and Automation</option>
                                    <option value={22242}> Computer Science and Engineering</option>
                                    <option value={22245}> Computer Engineering</option>
                                    <option value={22246}> Information Technology</option>
                                    <option value={22251}> Computer Technology</option>
                                    <option value={22252}> Cyber Security</option>
                                    <option value={22253}> Internet of Things (IoT)</option>
                                    <option value={22254}> Computer Science and Technology</option>
                                    <option value={22255}> Computer Science(IOT)</option>
                                    <option value={22256}> Computer Science(AI)</option>
                                    <option value={22257}> Computer Science and Design</option>
                                    <option value={22258}>
                                        {" "}
                                        Civil Engineering with Computer Application
                                    </option>
                                    <option value={22259}>
                                        {" "}
                                        Mechanical and Mechatronics Engineering (Additive Manufacturing)
                                    </option>
                                    <option value={22260}>
                                        {" "}
                                        Computer Science and Engineering (Cyber Security)
                                    </option>
                                    <option value={22261}> Electronics and Computer Science</option>
                                    <option value={22262}> Computer Science and Business Systems</option>
                                    <option value={22263}>
                                        {" "}
                                        Artificial Intelligence (AI) and Data Science
                                    </option>
                                    <option value={22264}> Automotive Technology</option>
                                    <option value={22265}> Industrial IoT</option>
                                    <option value={22266}> Robotics and Artificial Intelligence</option>
                                    <option value={22267}> Computer Science and Engineering (IoT)</option>
                                    <option value={22268}>
                                        {" "}
                                        Computer Science and Design (AI &amp; ML)
                                    </option>
                                    <option value={22269}> Computer and Information Technology</option>
                                    <option value={22270}>
                                        {" "}
                                        Computer Science and Engineering (Digital Forensic and Cyber
                                        Security)
                                    </option>
                                    <option value={22271}>
                                        {" "}
                                        Computer Engineering (Regional Language)
                                    </option>
                                    <option value={22293}> Electrical Engineering</option>
                                    <option value={22297}> Electrical and Electronics Engineering</option>
                                    <option value={22298}> Electrical Engg [Electrical and Power]</option>
                                    <option value={22299}> Power Engineering</option>
                                    <option value={22354}> Electronics Design Technology</option>
                                    <option value={22356}> Electrical Engg[Electronics and Power]</option>
                                    <option value={22357}> Electronics and Electrical Engineering</option>
                                    <option value={22370}>
                                        {" "}
                                        Electronics and Communication Engineering
                                    </option>
                                    <option value={22372}> Electronics and Telecommunication Engg</option>
                                    <option value={22376}> Electronics Engineering</option>
                                    <option value={22377}>
                                        {" "}
                                        Electronics and Communication Technology
                                    </option>
                                    <option value={22378}>
                                        {" "}
                                        Electronics Engineering ( VLSI Design and Technology)
                                    </option>
                                    <option value={22383}> Electrical and Power Engineering</option>
                                    <option value={22461}> Bio Medical Engineering</option>
                                    <option value={22464}>
                                        {" "}
                                        Instrumentation and Control Engineering
                                    </option>
                                    <option value={22466}> Instrumentation Engineering</option>
                                    <option value={22499}> Mechanical Engineering (Auto)</option>
                                    <option value={22501}> Plastic and Polymer Engineering</option>
                                    <option value={22503}> Food Technology</option>
                                    <option value={22504}> Food Technology And Management</option>
                                    <option value={22506}> Polymer Engineering</option>
                                    <option value={22507}> Chemical Engineering</option>
                                    <option value={22508}> Plastic Technology</option>
                                    <option value={22510}> Plastic and Polymer Technology</option>
                                    <option value={22511}> Dyestuff Technology</option>
                                    <option value={22512}>
                                        {" "}
                                        Oil,Oleochemicals and Surfactants Technology
                                    </option>
                                    <option value={22513}>
                                        {" "}
                                        Pharmaceuticals Chemistry and Technology
                                    </option>
                                    <option value={22514}>
                                        {" "}
                                        Fibres and Textile Processing Technology
                                    </option>
                                    <option value={22515}> Chemical Technology</option>
                                    <option value={22517}> Oil and Paints Technology</option>
                                    <option value={22518}> Oil Fats and Waxes Technology</option>
                                    <option value={22519}> Polymer Engineering and Technology</option>
                                    <option value={22520}> Polymer Technology</option>
                                    <option value={22521}> Petroleum Engineering</option>
                                    <option value={22523}> Paints Technology</option>
                                    <option value={22524}> Paper and Pulp Technology</option>
                                    <option value={22527}> Petro Chemical Engineering</option>
                                    <option value={22528}> Petro Chemical Technology</option>
                                    <option value={22529}> Oil Technology</option>
                                    <option value={22534}> Food Engineering and Technology</option>
                                    <option value={22535}> Pulp Technology </option>
                                    <option value={22536}> Petroleum Technology </option>
                                    <option value={22566}> Computer Science</option>
                                    <option value={22567}>
                                        {" "}
                                        Electronics and Telecommuincation Engg [Technologynician Electronic
                                        Radio]
                                    </option>
                                    <option value={22568}>
                                        {" "}
                                        Computer Science and Information Technology
                                    </option>
                                    <option value={22569}> Electronics Technology</option>
                                    <option value={22570}> Fashion Technology</option>
                                    <option value={22571}>
                                        {" "}
                                        Electrical and Electronics [Power System]
                                    </option>
                                    <option value={22572}> Electronics and Power Engineering</option>
                                    <option value={22573}> Electrical, Electronics and Power</option>
                                    <option value={22574}> Electronics System Engineering</option>
                                    <option value={22575}>
                                        {" "}
                                        Electrical and Instrumentation Engineering
                                    </option>
                                    <option value={22576}>
                                        {" "}
                                        Electronics &amp; Communication Engineering(Sandwich)
                                    </option>
                                    <option value={22589}> Industrial Engineering</option>
                                    <option value={22602}> Automobile Engineering</option>
                                    <option value={22606}> Production Engineering</option>
                                    <option value={22612}> Mechanical Engineering</option>
                                    <option value={22613}> Mechatronics Engineering (Sandwich)</option>
                                    <option value={22615}>
                                        {" "}
                                        Mechanical &amp; Automation Engineering
                                    </option>
                                    <option value={22616}> Mechanical Engineering Automobile</option>
                                    <option value={22624}> Mechatronics Engineering</option>
                                    <option value={22625}> Mechanical Engineering[Sandwich]</option>
                                    <option value={22626}> Production Engineering[Sandwich]</option>
                                    <option value={22627}> Manufacturing Science and Engineering</option>
                                    <option value={22692}> Metallurgical Engineering</option>
                                    <option value={22693}> Marine Engineering</option>
                                    <option value={22694}> Metallurgy and Material Technology</option>
                                    <option value={22701}> Mining Engineering</option>
                                    <option value={22729}> Surface Coating Technology</option>
                                    <option value={22816}>
                                        {" "}
                                        Pharmaceutical and Fine Chemical Technology
                                    </option>
                                    <option value={22841}> Printing and Packing Technology</option>
                                    <option value={22842}>
                                        {" "}
                                        Printing Engineering and Graphics Communication
                                    </option>
                                    <option value={22843}> Printing Technology</option>
                                    <option value={22844}> Electronics and Computer Engineering</option>
                                    <option value={22886}> Man Made Textile Technology</option>
                                    <option value={22890}> Textile Chemistry</option>
                                    <option value={22893}> Textile Engineering / Technology</option>
                                    <option value={22895}> Textile Plant Engineering</option>
                                    <option value={22896}> Textile Technology</option>
                                    <option value={22898}>
                                        {" "}
                                        Textile Engineering (Fashion Technology)
                                    </option>
                                    <option value={22899}> Mechanical Automation Engineering</option>
                                    <option value={22900}> Electronics and Computer Science</option>
                                    <option value={22910}>
                                        {" "}
                                        Computer Science and Engineering(Cyber Security)
                                    </option>
                                    <option value={22911}>
                                        {" "}
                                        Computer Science and Engineering(Artificial Intelligence and Machine
                                        Learning)
                                    </option>
                                    <option value={22912}>
                                        {" "}
                                        Computer Science and Engineering(Data Science)
                                    </option>
                                    <option value={22913}>
                                        {" "}
                                        Computer Science and Engineering (Artificial Intelligence){" "}
                                    </option>
                                    <option value={22914}> Safety and Fire Engineering</option>
                                    <option value={22915}> Structural Engineering</option>
                                    <option value={22916}> Automation and Robotics</option>
                                    <option value={22917}> Data Science</option>
                                    <option value={22918}> Civil and infrastructure Engineering</option>
                                    <option value={22920}>
                                        {" "}
                                        Computer Science and Engineering (Internet of Things and Cyber
                                        Security Including Block Chain Technology){" "}
                                    </option>
                                    <option value={22921}>
                                        {" "}
                                        Artificial Intelligence and Machine Learning{" "}
                                    </option>
                                    <option value={22922}> Civil and Environmental Engineering </option>
                                    <option value={22923}> Silk Technology</option>
                                    <option value={22924}> Data Engineering</option>
                                    <option value={22925}>
                                        {" "}
                                        Computer Science and Engineering (Artificial Intelligence and Data
                                        Science)
                                    </option>
                                    <option value={22926}> Electrical and Computer Engineering</option>
                                    <option value={22927}>
                                        {" "}
                                        Computer Engineering (Software Engineering)
                                    </option>
                                    <option value={22928}>
                                        {" "}
                                        Electronics and Communication(Advanced Communication Technology)
                                    </option>
                                    <option value={22929}> VLSI</option>
                                    <option value={22930}> Logistics</option>
                                    <option value={22931}>
                                        {" "}
                                        Computer Science and Engineering (Data Science?and?Analytics)
                                    </option>
                                    <option value={22932}> 5G</option>
                                    <option value={22933}>
                                        {" "}
                                        Electronics and Communication (Advanced Communication Technology)
                                    </option>
                                    <option value={22934}> Civil Engineering and Planning</option>
                                    <option value={22935}> Electronics and Biomedical?Engineering</option>
                                    <option value={22936}> Fire Engineering</option>
                                    <option value={22994}> Robotics</option>
                                    <option value={22995}>
                                        {" "}
                                        Artificial Intelligence and Data Science
                                    </option>
                                    <option value={22996}> Design</option>
                                    <option value={22997}> Artificial Intelligence</option>
                                    <option value={22998}> B.Planning</option>
                                    <option value={22999}> B.Tech Planning</option>0
                                </select>
                                <br />
                                <br />
                                <label htmlFor="Institute Status">Autonomy Status</label>
                                <select
                                    id="AutonomyStatus"
                                    name="AutonomyStatus"
                                    className={optionBox}
                                >
                                    <option value={0}> All </option>
                                    <option value={1}> Autonomous </option>
                                    <option value={2}> Non-Autonomous </option>
                                    <option value={3}> Deemed University </option>
                                    <option value={5}> Not Applicable </option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:col-span-1">
                                <div className="inline-flex items-center">
                                    <input
                                        type="button"
                                        defaultValue="Search"
                                        className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
                                        id="submitbtnresults"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
