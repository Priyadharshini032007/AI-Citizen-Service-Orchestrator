// PAGE NAVIGATION

function showPage(pageName) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document
        .getElementById(pageName)
        .classList.add("active");

    window.scrollTo(0, 0);
}



// AI REQUEST ANALYSIS

function analyzeRequest() {

    let request =
        document.getElementById("userRequest").value;

    if (request.trim() === "") {

        alert("Please describe your requirement.");

        return;
    }


    // Show AI processing

    document
        .getElementById("processing")
        .classList.remove("hidden");


    // Simulate AI

    setTimeout(function() {

        document
            .getElementById("processing")
            .classList.add("hidden");

        document
            .getElementById("result")
            .classList.remove("hidden");

    }, 2000);

}



// DOCUMENT VERIFICATION

function verifyDocument() {

    let file =
        document.getElementById("incomeFile").files[0];


    if (!file) {

        alert("Please select an income proof document.");

        return;
    }


    // Change document status

    document
        .getElementById("documentStatus")
        .innerText = "✓ Verified";

    document
        .getElementById("documentStatus")
        .className = "verified";


    // Dashboard update

    document
        .getElementById("pendingCount")
        .innerText = "1";

    document
        .getElementById("verifiedCount")
        .innerText = "4";


    // Income application update

    document
        .getElementById("incomeStatus")
        .innerText =
        "Ready for Submission";

    document
        .getElementById("incomeStatus")
        .className =
        "status blue";


    document
        .getElementById("incomeProgress")
        .style.width = "65%";


    document
        .getElementById("incomePercentage")
        .innerText =
        "65% Complete";


    document
        .getElementById("incomeDocument")
        .innerText =
        "Income Proof ✓";


    document
        .getElementById("applicationStatus")
        .innerText =
        "✓ Application Preparation";


    // Notification update

    document
        .getElementById("notificationBox")
        .innerHTML = `

        <div class="notification">

            ✅ <b>Document Verified</b>

            <p>
                Your income proof has been
                successfully verified.
            </p>

        </div>


        <div class="notification">

            📋 <b>Income Certificate Ready</b>

            <p>
                Your application is ready
                for submission.
            </p>

        </div>


        <div class="notification">

            🔗 <b>AI Document Reuse</b>

            <p>
                3 documents are shared
                across both services.
            </p>

        </div>

    `;


    alert(
        "AI verification complete! Income Proof Verified."
    );
}